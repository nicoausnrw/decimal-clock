    
    // check if "clock div" is there
    var el = document.getElementById("clock");
    if(!!el){
        // is there, than run the main function every 50ms
        setInterval(clock,50);
    }
    

    // function for leading null
    function x(number) {
        number = ("0"+number).slice(-2); 
        return number;
    }

    // help function to simplfy calculation
    function restSplit (a,b){
        
        let rest = a % b;
        let teil = (a-rest)/b;
        return [teil,rest]
    }
    
    
    // need for less html updates
    var temp
    

    // MAIN FUNCTION
    function clock () {


        let d = new Date();

        // calculate how old is the day in ms
        let totalRealMSec = d.getMilliseconds()+(d.getSeconds()*1000)+(d.getMinutes()*60*1000)+(d.getHours()*60*60*1000)
        
        // calculate how old is the day in decimal ms
        let totalDecMSec = totalRealMSec/0.864
        
        // calculate the decimal hour, minutes and secounds
        let dh   = restSplit(totalDecMSec,10000000) // hour
        let dmin = restSplit(dh[1],100000)          // minute
        let dsec = restSplit(dmin[1],1000)          // secound
        
        // make sexy time string
        let decTime = `${x(dh[0])}:${x(dmin[0])}:${x(dsec[0])}`   // result: 09:72:42
        
        // Without secounds
        //let decTime = `${x(dh[0])}:${x(dmin[0])}`               // result: 09:72
        

        // only update html if time changes to reduse new rendering of the site.
        if (dsec != temp){

            el.innerText = decTime
            temp = dsec
        }

        
    
    };
    