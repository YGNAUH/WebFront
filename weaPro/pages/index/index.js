const APIKEY = "c57b8ada312f47778d07147d289b0449";
Page({
  
  data:{
    img:100,
    con:"晴",
    City: "请选择城市",
    wind:"东南风",
    wind_sc:1,
    i1: 100,
    i2: 101,
    i3: 101,
    wc0:["晴天",6,12,"东南风",1],
    wc1:["多云",5,9,"东南风","2-3"],
    wc2:["多云",6,11,"东南风",2]
  },
  chooseCity() {
    var that = this;
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => { 
        my.alert({
          content: `您选择的城市: ${res.city}`
        }),
        //console.log(res),
        that.setData({
          City:res.city,
          Code:res.adCode
        }),
        that.GetWeather()
        that.GetTransition()
       }
       
    }); 
  },
  GetWeather(){
    var that = this;
        my.request({
          url: 'https://free-api.heweather.net/s6/weather/now',
          data:{
            location: that.data.City,
            key:APIKEY
          },
        success: function (result) {
            //console.log(result.data.HeWeather6[0].now)
            that.setData({
              tem:result.data.HeWeather6[0].now.tmp,
              con:result.data.HeWeather6[0].now.cond_txt,
              wind:result.data.HeWeather6[0].now.wind_dir,
              img:result.data.HeWeather6[0].now.cond_code,
              wind_sc:result.data.HeWeather6[0].now.wind_sc,
             })
          }
        })
    },
    GetTransition(){
      var that = this;
      my.request({
        url:"http://api.tianapi.com/txapi/pinyin/index",
        data:{
          key:"f79c5fafb2cb57cef5283ec370ab09e1",
          text:that.data.City
        },
        success(res){
          //console.log(res.data.newslist[0].pinyin),
          that.setData({
            pinyin:res.data.newslist[0].pinyin
          })
          that.changespace()
        }
      })
    },
    changespace(){
      var that = this;
      //console.log(that.data.pinyin)
      var result = that.data.pinyin.replace(/\s+/g, '');
      //console.log(result)
      that.setData({
        pinyin:result
      })
      that.GetPosition()
      //console.log(that.data.pinyin)
    },
    GetPosition(){
      var that = this;
      my.request({
        url:"https://geoapi.qweather.com/v2/city/lookup?",
        data:{
          key:APIKEY,
          location:that.data.pinyin},
          success(res){
            //console.log(res.data.location[0].id),
            that.setData({
              cityid:res.data.location[0].id
            })
            that.GetWeather7()
          }
      })
     
    },
   GetWeather7(){
      var that = this;
      //console.log(that.data.cityid)
      my.request({
        url:"https://devapi.qweather.com/v7/weather/3d?",
        data:{
          location:that.data.cityid,
          key:APIKEY},
        success(res){
          console.log(res.data.daily),
          that.setData({
            wc0:[res.data.daily[0].textDay,res.data.daily[0].tempMax,res.data.daily[0].tempMin,res.data.daily[0].windDirDay,res.data.daily[0].windScaleDay],
            wc1:[res.data.daily[1].textDay, res.data.daily[1].tempMax, res.data.daily[1].tempMin,res.data.daily[1].windDirDay,res.data.daily[1].windScaleDay],
            wc2:[res.data.daily[2].textDay,res.data.daily[2].tempMax, res.data.daily[2].tempMin,res.data.daily[2].windDirDay,res.data.daily[2].windScaleDay],
            i1:res.data.daily[0].iconDay,
            i2:res.data.daily[1].iconDay,
            i3:res.data.daily[2].iconDay,

          })
        }
      })
    }



 
});