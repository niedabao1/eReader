const voicePlayerBar = Vue.createApp({ //创建一个app
    data() {
        return {
            //播放菜单
            vocFileName : "./voc/What Is the US Capitol Building.mp3",
            buttonPlay: "播放",
            buttonPause: "暂停",
            ifPlayPause: true,
            vocTime: null,
            vocWholeTime: null,
            //播放条部分
            coverBarWidth:null,
        }
    },
    mounted(){    
        let that = this;
        document.onkeydown = function(e) {            
            let key = window.event.keyCode;            
            if (key== 32) {
                window.event.preventDefault() //关闭浏览器快捷键
                that.eventPlayVocSpace();
            
            }
        };
      },
    methods: {
        eventPlayVocClick(event){
           if (this.ifPlayPause == true) {
            varAudio.play();
           }
           else{
            varAudio.pause();
           }
           this.ifPlayPause = !this.ifPlayPause;         
        } , 
        eventPlayVocSpace(){
            if (this.ifPlayPause == true) {
                varAudio.play();
               }
               else{
                varAudio.pause();
               }
               this.ifPlayPause = !this.ifPlayPause;   
        },

        eventGetVocDurning(event){
            //console.log(event.target.duration);
            this.vocWholeTime = event.target.duration;  //获取整段事件
        } ,

        eventGetVocCurrentTime(event){
            this.vocTime = Math.round(event.target.currentTime) + 'S' ;
            this.coverBarWidth =  (100 *(event.target.currentTime / event.target.duration))

        },
        
        eventPlayPrgBarClick(event){  
           varAudio.currentTime = this.vocWholeTime * (event.offsetX / varPlayPrgBar.offsetWidth);
           varAudio.play(); //点击位置后自动播放
           this.ifPlayPause = false;
           /* test
            console.log("Width: " + varPlayPrgBar.offsetWidth);
            console.log("offsetX: " + event.offsetX);
            console.log("CurrentTime: " + varAudio.currentTime);
            console.log("caculate value: " + this.vocWholeTime * (event.offsetX / varPlayPrgBar.offsetWidth));
           */

        }
    }

})

/**read file */
const uploadFile = Vue.createApp({
    data() {
        return {
            testValue : "loaloa",
            fileStream : null,
        }
    },
    methods: {
        funcLoadFile(event){
            console.log("triger on");
            let reader = new FileReader();
            reader.onload = (event)=>{ //只能使用这种形式: www.reddit.com/r/vuejs/comments/cxycj3/call_thisfunction_from_inside_of_readeronlo
            this.fileStream = event.target.result;
            mountedVoicePlayerBar.$data.vocFileName = this.fileStream;
           // const voiceFileStream = new Blob();
           //varAudio.src = URL.createObjectURL(reader.result);
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }
})


//操作音频的函数



