var t1="{{20-րդ դար}}_{{Տարին այլ օրացույցներով|{{PAGENAME}}}}\n\
\n\
{{Սկսվող տարի|{{PAGENAME}}}}\n\
\n\
== Դեպքեր ==\n\
\n\
* [[Հունվարի 1]] - [[Սուդան]]ը անկախացավ։\n\
* [[Հունվարի 26]] - [[Փետրվարի 5]] - [[Իտալիա]]յի [[Կորտինա դ'Ամպեցցո]] [[քաղաք]]ում անցկացվեցին VII [[Ձմեռային Օլիմպիական խաղեր]]ը։\n\
    * [[Փետրվարի 29]] - [[Պակիստան]]ը հանրապետություն հռչակվեց։\n\
* [[Մայիսի 24]] - Առաջին անգամ կայացավ [[Եվրատեսիլ երգի մրցույթ]]ը։\n\
* [[Հունիսի 23]] - [[Գամալ աբդ ալ-Նասեր]]ը դարձավ [[Եգիպտոս]]ի երկրորդ նախագահը։\n\
* [[Հուլիսի 22]] - Շահագործման է հանձնվում [[Երևան]]ի կայարանի նոր շենքը։\n\
* [[Հոկտեմբերի 15]] - [[Ֆիդել Կաստրո]]ն և [[Չե Գեվարա]]ն մեկնում են [[Մեքսիկա]]յի [[Տուսպան]] [[քաղաք]]ից դեպի [[Սանտիագո դե Կուբա]]՝ «[[Գրանմա]]» նավով, 82 ուղևորների հետ։ [[Դեկտեմբեր 2]]-ին նավը, փոթորկից փրկվելով, հասնում է [[Բելիսի]] ([[Կուբա]])։\n\
* [[Հոկտեմբերի 23]] - [[Հունգարական Հեղափոխություն]] Սովետական Միության կողմնակից կառավարության դեմ։ [[ԽՍՀՄ]]-ը միջամտում է։\n\
* [[Հոկտեմբերի 26]] - [[Կարմիր բանակ]]ը ներխուժում է [[Հունգարիա]]։\n\
\n\
== Ծնունդներ ==\n\
\n\
    * [[Հունվար 3]] - [[Մել Գիբսոն]], ամերիկացի դերասան, ռեժիսոր\n\
    * [[Ապրիլի 14]] - [[Տիգրան Թորոսյան]], հայ քաղաքական գործիչ\n\
    * [[Օգոստոսի 1]] - [[Անուշավան Դանիելյան ]], Լեռնային Ղարաբաղի Հանրապետության վարչապետ\n\
    * [[Ապրիլի 14]] - [[  T3 ]], հայ քաղաքական գործիչ\n\
    * [[Օգոստոսի 16]] - [[Վահան Հովհաննիսյան]], հայ [[քաղաքական գործիչ]], նախկին [[Ազգային Ժողով]]ի նախագահի տեղակալ և [[Հայ Հեղափոխական Դաշնակցություն|Հայ Հեղափոխական Դաշնակցության]] անդամ\n\
    * [[Ապրիլի 14]] - [[ահան Հովհաննիսյան]], հայ քաղաքական գործիչ\n\
    * [[Հոկտեմբերի 28]] - [[Մահմուդ Ահմադինեջադ]], [[Իրան]]ի [[Իրանի Նախագահ|նախագահ]]\n\
\n\
    == Մահեր ==\n\
\n\
* [[Մարտ 8]] - [[Դրաստամատ Կանայան|Դրաստամատ Կանայան (Դրո)]] ֆիդայի, քաղաքական գործիչ (ծ. [[1884]])\n\
    * [[Մայիս 3]] - [[Գրիգոր Ղափանցյան]], հայ լեզվաբան-հայագետ (ծ. [[1887]])\n\
    * [[Սեպտեմբերի 29]] - [[Անաստասիո Սոմոսա Գարսիա|Անաստասիո Սոմոսա]], [[Նիկարագուա]]յի նախագահ (ծ. [[1896]])\n\
    * [[Դեկտեմբեր 2]] - [[Պերճուհի Բարսամյան]], բանաստեղծուհի։\n\
* [[Հունիս 23]] - [[Մայքլ Արլեն]], (Տիգրան Գույումճյան), սփյուռքահայ անգլիագիր գրող (ծ. [[1895]])\n\
    * [[Դեկտեմբերի 6]] - [[Դերենիկ Դեմիրճյան]], հայ գրող, հրապարակախոս (ծ. [[1877]])\n\
\n\
    <!--interwiki-->\n\
\n\
    [[Կատեգորիա:1956]]\n\
\n\
";
var s1="Ծնունդներ";
var NO1= {
    name: "ՎահանՀովհննիյան",
    description: "ttt"
};
var DO1= {
    day: 14,
    month: 4,
    year: 1905
};
var IY1=false;
//////////////////////////////////////////////////////////////////////////////////////////
var M_names=['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս','Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'];
function min_positive(a,b,c,d)
{
    var ret=-10;
    if(a>0 && (a<ret || ret==-10) ) ret=a;
    if(b>0 && (b<ret || ret==-10) ) ret=b;
    if(c>0 && (c<ret || ret==-10) ) ret=c;
    if(d>0 && (d<ret || ret==-10) ) ret=d;
    return ret;
}
function stug(S1,S2)
{
    var percent=90; /// min percent of LCS required to consider the names as the same
    var arr1=[],arr2=[],i;
    for(i=0;i<=S2.length;i++) arr2.push(0);
    for(i=1;i<=S1.length;i++)
    {
        arr1=arr2;
        arr2[0]=0;
        for(var j=1;j<=S2.length;j++)
        {
            if(S2[j-1]==S1[i-1]) arr2[j]=arr1[j-1]+1;
            else arr2[j]=Math.max(arr2[j-1],arr1[j]);
        }
    }
    var p=arr2[S2.length];
//    var mi=Math.min(S1.length,S2.length);
    var ma=Math.max(S1.length,S2.length);
    var percentt=100.0*p/ma;
    return percentt>=percent;
}
function checkPersonExists(text, section, NameObject, DayObject, isYear)
{
    var i1=text.search(new RegExp("==\\s*"+section+"\\s*=="));
    if(i1==-1) return false;
    var section_start,t=0;
    for(section_start=i1;t<4;section_start++)
        if(text[section_start]=='=')
            t++;
    var section_end=min_positive( text.length, text.indexOf("==",section_start) ,
        text.indexOf("[[Կատեգորիա",section_start) , text.indexOf("<!--",section_start));
    var section_text=text.substring(section_start,section_end);
    var event_date;
    if(isYear) event_date=DayObject.year.toString();
    else event_date=M_names[DayObject.month-1]+"\.\\s*"+DayObject.day.toString();
    var ankap="\\*\\s*\\[\\[\\s*" + event_date + "\\s*\\]\\]\\s*-\\s*\\[\\[\\s*(.*)\\s*\\]\\]";
    var re=new RegExp(ankap,'g');
    var r1;
    while(1)
    {
        r1=re.exec(section_text);
        if(r1==null) break;
        if(stug(NameObject.name,r1[1])) return true;
    }
    return false;
}
var result=checkPersonExists(t1,s1,NO1,DO1,IY1);
console.log(result);