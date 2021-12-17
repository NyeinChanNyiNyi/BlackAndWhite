const appOne=Vue.createApp({
    data(){
        return{
            bgColor:'#222831',
            rightControl:-300,
            whiteColor:'#fff',
            border:'2px solid #fff',
        }
    },
    methods: {
        rightcontrolout(){
            this.rightControl=0;
        },
        rightcontrolin(){
            this.rightControl=-300;
        },
        themechange(){
            if(this.whiteColor=='#fff'){
                this.bgColor = "#fff";
                this.whiteColor = "#222831";
                this.border = "2px solid #222831";
            }else{
                this.bgColor= '#222831';
                this.whiteColor = "#fff";
                this.border = "2px solid #fff";
            }
            
        }

    },
});

appOne.mount('#app');
