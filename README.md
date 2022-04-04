# graduation-project-kerempekarli
graduation-project-kerempekarli created by GitHub Classroom

![Login](https://user-images.githubusercontent.com/83536108/160753961-3dfd5b62-2af1-40fb-a900-db4257b5afcf.png)
![Homepage](https://user-images.githubusercontent.com/83536108/160753991-5e304420-8832-4e79-a370-2c15327e40e8.png)
![ProductDetailPage](https://user-images.githubusercontent.com/83536108/160754002-43725a17-9df3-4863-815d-835f3c908a4b.png)
![Addproduct](https://user-images.githubusercontent.com/83536108/160754022-a62e92f9-2ddf-402e-9b49-057809cb7073.png)


### Register page 

![RegisterPage](https://user-images.githubusercontent.com/83536108/160754012-a3c23029-f175-4933-b1d4-d938f2a5949b.png)
Kullanıcı kayıt olduğunda utils-> Helper sınıfı kullanarak req.body.password hashlenir ve requesti manipüle ederek hashlenmiş parolayı req.body.password'a yazılır.
Kullanıcı parolası database'e hashlenmiş olarak kaydedilir.


### Backend mimarisi

App.js içinde üç ana route belirledim ve gelen endpointe göre requesti yönlendirdim.
Register requesti için yönlendirme şu şekilde App.js => UserRouter.js => UserController.js => UserService.js

### App.js
![image](https://user-images.githubusercontent.com/83536108/160755067-698fcf45-45a1-4c81-b621-974c7ae97b6b.png)
### UserRouter.js
![image](https://user-images.githubusercontent.com/83536108/160755433-adebcaa3-d501-4487-a7c4-5598d4b42ed6.png)
### UserController.js
![image](https://user-images.githubusercontent.com/83536108/160755740-8e464914-819e-4d8d-96a5-c543443fe114.png)
### UserServices.js
![image](https://user-images.githubusercontent.com/83536108/160755915-a324ca1e-c4a0-4681-947e-91b4b69ee795.png)


##### Backend Tarafında Token oluşturma - Yetkilendirme 

Kullanıcı Login olduğunda response göndermeden önce data objesi oluşturarak user bilgilerini data objesinin içine ekledim ve tokens arrayi oluşturarak arrayin içine resfresh token ve access token bilgilerini ekledim.

![image](https://user-images.githubusercontent.com/83536108/160758064-9f52ca09-4936-480e-a393-6e9a9f5e90ad.png)

#### Middleware ile yetki kontrolü 
  Controller'ın içinde middleware kullanarak controller'in içindeki metodu çalıştırabilmesi için yetki kontrolü yaptım.
  
![image](https://user-images.githubusercontent.com/83536108/160758266-45c74c7b-b475-47d3-9668-d4a5664d0395.png)

##### Parola sıfırlama için E-mail gönderme işleminin uygulaması
 
  Henüz geliştirme aşamasında olduğum için Kullanıcının emailine şifre sıfırlama linki yollamak yerine direk random oluşturduğum şifreyi yolluyorum. 
  
 Nodemailer kullanarak Email gönderme işlemi ve event emitter;
    ![image](https://user-images.githubusercontent.com/83536108/160759843-f9f5e09d-170e-4f7e-af75-cb0ba3ecdde6.png)

  ![image](https://user-images.githubusercontent.com/83536108/160759740-b3c5ba20-fa9b-465c-a837-ef09decc09ab.png)

  #### Validation middleware 
  
  Joi kütüphanesini kullanarak gelen request içindeki keylere sınırlamalar getiriyoruz. Bu sayede Database'e veri eklerken kontrol edebiliyoruz ve uygun olmayan verilerin önüne geçiyoruz.
  
  Örnek olarak ürünü database'e eklemeden önce ürünün değerlerini kontol etmek için Joi kütüphanesini kullanarak bir obje oluşturdum ve addValidation değişkenine atadım. 
   
   ![image](https://user-images.githubusercontent.com/83536108/160768276-2b293d30-d86d-4f1b-9e53-a40650abbb27.png)

                                                
  ![image](https://user-images.githubusercontent.com/83536108/160768320-59206a2c-5961-4801-af88-eb7955f6398c.png)


  Validate middlewaresi kullanarak controller'da ürün ekleme metodunun öncesinde çalıştırarak gerekli kontrolleri yaptım. Uygun değilse 400 bad request cevabını döndürdüm, Eğer uygunsa next() diyerek middlewarenin devam etmesini onayladım ve Object.assign metodu ile req ve value değerini birleştirip son devreye girecek olan fonksiyona gönderdim. 
  
  
  ##### Fotoğraf ekleme ve frontend'te gösterme
    
    if bloğu içinde requestin içinde resim olup olmadıgını kontrol ettim eğer yoksa bad request döndürdüm.
    
    Eğer resim varsa path.extname metodu kullanarak dosya uzantısını aldım.
    
    dosya isimlerinin çakışmasını önlemek için resmin isminin unique olması gerekli bu yüzden date.now komutunu kullanarak resmin ismini manüpüle ettim.
    
    dosyayı yüklemek istediğim dosya yolunu path1 değişkenine atadım.
    
    path.join metodu kullanarak dosya yoluna resmimizin ismini ve uzantısını ekledim ve bir değişkene atadım. ( Kullanımın kolay olması için frontend asset klasörüne yükledim )
    
    devamında express.upload middlewaresinden gelene mv() komutunu kullanarak dosyayı istediğimiz dosya yoluna gönderdim. ve bütün bu metodun sonucu olarak
    
    resmin ismini geriye gönderdüm bu sayede dosya ismini databaseye ekleyebileceği.
    
![image](https://user-images.githubusercontent.com/83536108/160769373-61cf1b03-751a-4e90-a3d8-a257fbeccdfe.png)



















  



