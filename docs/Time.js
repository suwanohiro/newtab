        var nowTime;
        var nowHour;
        var nowMin;
        var nowSec;
        var nowYear;
        var nowMonth;
        var nowDate;
        var nowDay;
        var Days;
        var msg;


        function set2fig() {
            // 桁数が1桁だったら先頭に0を加えて2桁に調整する
            if (nowHour < 10) {
                nowHour = "0" + nowHour;
            } else {
                nowHour = nowHour;
            }
            if (nowMin < 10) {
                nowMin = "0" + nowMin;
            } else {
                nowMin = nowMin;
            }
            if (nowSec < 10) {
                nowSec = "0" + nowSec;
            } else {
                nowSec = nowSec;
            }
            if (nowDate < 10) {
                nowDate = "0" + nowDate;
            } else {
                nowDate = nowDate;
            }
            if (nowMonth < 10) {
                nowMonth = "0" + nowMonth;
            } else {
                nowMonth = nowMonth;
            }

        }

        function Dayif() {
            if (nowDay == 0) Days = "日曜日";
            if (nowDay == 1) Days = "月曜日";
            if (nowDay == 2) Days = "火曜日";
            if (nowDay == 3) Days = "水曜日";
            if (nowDay == 4) Days = "木曜日";
            if (nowDay == 5) Days = "金曜日";
            if (nowDay == 6) Days = "土曜日";
        }

        function showClock1() {
            nowTime = new Date();
            nowHour = nowTime.getHours();
            nowMin = nowTime.getMinutes();
            nowSec = nowTime.getSeconds();
            nowYear = nowTime.getFullYear();
            nowMonth = nowTime.getMonth();
            nowMonth = nowMonth + 1;
            nowDate = nowTime.getDate();
            nowDay = nowTime.getDay();
            set2fig();
            Dayif();
            msg = nowYear + "年" + " " + nowMonth + "月" + " " + nowDate + "日" + " " + "(" + Days + ")" + "　" + nowHour + ":" + nowMin + ":" + nowSec;
            document.getElementById("Time").innerHTML = msg;
        }
        setInterval('showClock1()', 100);