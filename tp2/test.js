//declare variables
const btn_input=document.getElementById('btn_test');
const input_test=document.getElementById('test_input');


//add event listener
btn_input.addEventListener('click',()=>{
    if(input_test.value.trim()!==""){
        alert(`Vous avez entré : ${input_test.value}`);
        const ch=input_test.value;
        for(let i=0;i<ch.length;i++){
            if(ch[i]==='a' || ch[i]==='e' || ch[i]==='i' || ch[i]==='o' || ch[i]==='u' || ch[i]==='y' || ch[i]==='A' || ch[i]==='E' || ch[i]==='I' || ch[i]==='O' || ch[i]==='U' || ch[i]==='Y'){
                console.log(`la voyelle ${ch[i]} est a la position ${i}`);
            }else if(ch[i]>='0' && ch[i]<='9'){
                console.log(`le chiffre ${ch[i]} est a la position ${i}`);
            }else{
                console.log(`la consonne ${ch[i]} est a la position ${i}`);
            }
        }
        tab=ch.split(' ');
        tab.forEach(element => {
            element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
            console.log(element);
        });
    }else{
        alert("veuillerz svp entrer variable ")
        // je veut afficher dans le place holder
        input_test.placeholder="veuillerz svp entrer variable "
        input_test.focus();

    }
});
