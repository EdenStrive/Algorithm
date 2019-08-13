    const express = require('express');
    const upload = require('multer')({ dest: 'uploads/' });
    const path = require('path');
    const fs = require('fs');
    const port = 8088;
    
    let  app = express();
    
    app.set('port', port);
    // index.html, index.js放在static文件夹中
    app.use(express.static(path.join(__dirname, 'static')));
    
    // app.get('/', (req, res) => {
    //   res.redirect('upload2.html');
    // });
    
    // 路由/ajax-upload 就回渲染 upload.html 页面
    app.get('/ajax-upload', function(req, res){  
      res.sendFile('upload.html', { root: __dirname });  
    });  
    app.get('/', function(req, res){  
      res.sendFile('index.html', { root: __dirname });  
    });  
    app.post('/upload', upload.single('test-upload'), (req, res) => {
      // 没有附带文件
      if (!req.file) {
        res.json({ ok: false });
        return;
      }// 重命名文件
      let oldPath = path.join(__dirname, req.file.path);
      let newPath = path.join(__dirname, 'uploads/' + req.file.originalname);
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          res.json({ ok: false });
          console.log(err);
        } else {
          res.json({ ok: true });
        }
      });
    });
    // 这里还没有做上传取消 删除文件的操作
    app.get('/abort', upload.single('test-upload'), (req, res)=>{
      console.log(req, 'abort') // 删除刚才上传的文件
    })
    
    app.listen(port, () => {
      console.log("[Server] localhost:" + port);
    });