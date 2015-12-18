$( document ).ready(function() {
    var poems 		= ['<h3 class="title">အပြုံးတစ်ပွင့်သို့ တမ်းချင်း</h3><p>“ယဉ်သောချစ်သူ …<br>မျက်ဝန်းချင်းဆုံ<br>ကြည့်တစ်စုံကြောင့်<br>လှပနေခက် ၊ မျက်နှာထက်မှ<br>ခဏတာစွင့် ၊ ကြွေလွင့်ခဲ့သော<br>ပြုံးတစ်ပွင့်အား လွမ်းမိသူ … ”</p>', '<p>ကျွန်တော့် ဆုငွေ<br>ကြွေမျက်ရည်ကို<br>ရက်စက်တတ်လွန်း ၊ ဖုန်းတစ်ခွန်းကြောင့်<br>ခဏတာမဲ့ ၊ သူရခဲ့သော<br>အပြုံးတစ်ချက် ၊ မျက်ရည်စက်နှင့်<br>လဲ၍ရက လဲလိုသည် ။…။'];
    var rand_poem 	= poems[Math.floor(Math.random() * poems.length)];

    var colors		= ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e'];
    var rand_color  = colors[Math.floor(Math.random() * colors.length)];

    $('#poem>.text').append(rand_poem);
    $('body').css('background-color', rand_color);
});