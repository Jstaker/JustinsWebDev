let date = new Date();

function doDate(){
    let hour = date.getHours();
    var hours = hour;
    var time = 'AM';
    if (hour > 12){
        hours = hour -12;
        time = 'PM';
    }

    document.getElementById("updated").innerHTML = document.lastModified;
}