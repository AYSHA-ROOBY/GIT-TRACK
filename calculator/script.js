let  dataenter = (data)=>{
    const Display=document.getElementById('output')
          Display.value+=data

}
let clearall=()=>{
    const Display=document.getElementById('output')
    Display.value=""
    Display.placeholder=0
}
 let back=()=>{
     const Display=document.getElementById('output')
    Display.value= Display.value.slice(0,-1)
 }
 let result=()=>{
    const Display=document.getElementById('output')
   try{ Display.value=eval(Display.value)}
   catch{
    Display.value=""
    Display.placeholder="error "       
   }
 }