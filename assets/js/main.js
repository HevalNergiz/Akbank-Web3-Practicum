var sayi=document.querySelector("#sayi");
        var sonuc=document.querySelector("#sonuc");
        var hesapla=document.querySelector("#hesapla");
        
        hesapla.onclick=function(){
            var adet = 0,toplam=0;
            var num=sayi.value.toString(); //Aldığım değeri stringe çevirdim
            
            for(var i =0 ; i< num.length;i++){
//basamak sayısına erişip basamak sayısı kadar döndürdüö
                toplam+=parseInt(num[i])//Basamakları  alıp integer'a çevirdim ve topladım
            }//if else ile çift mi tek mi bulup ekrana yazdırıyorum
            if(toplam%2==0)
            {
            sonuc.value="Even";
            }
            else
            { 
            sonuc.value="Odd";
            }
            }