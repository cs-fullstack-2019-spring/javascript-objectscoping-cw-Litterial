var peoplelist =
[
    {name:"Jimmy", last:"Page", age:"62", zip:"00821"},
    {name:"Rick", last:"Nielsen", age:"57", zip:"61016"},
    {name:"Jimi",last:"Hendrix",age:"58", zip:"90001"},
    {name:"Lemmy",last:"Kilmster",age:"57",zip:"21120"}
]


peoplelist[2].famousSong="Purple Haze";

console.log(peoplelist[2]);





peoplelist[0].getBandandZip = function()
{
    return ("Led Zeppilin " +this.zip);
}

console.log(peoplelist[0].getBandandZip());

function zipread(readzip)
{
    for(i=0; i<4;i++)
    {
        if (readzip==peoplelist[i].zip)
            console.log (peoplelist[i].name,peoplelist[i].zip)

    }
}

zipread("21120");

