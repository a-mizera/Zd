<template>
    <div>
        <p>Kalkulator:</p>
        <p>Ile transakcji wykonujesz miesiecznie?</p>
        <input type="number" v-model="ile"> <button @click="oblicz">Sprawdź</button>
        <p style="color:red;">{{errmessage}}</p>
        <div class="d-flex flex-row bg-light" >
            
            <div class="d-flex flex-column mx-auto">
                <div class="p-2">Na allegro zaplacisz</div>
                <div class="p-2">{{value2}}</div>
                </div>
            <div class="d-flex flex-column mx-auto">
                <div class="p-2">U nas zaplacisz</div>
                <div class="p-2">{{value1}}</div></div>
            
        </div>
        <p>Rocznie zaoszczędzisz {{oszczedz()}} </p>
    </div>
    

</template>
<script>


export default{
    data(){
        return{
            errmessage:' ',
            value1:0,
            value2:0




        }
    },
    methods:{
            oblicz(){
            if(this.ile>0 && this.ile%1==0 ){
                this.value1=this.ile*0.25;
                this.value2=this.ile*0.50;
                this.errmessage=' ';
                
                }
            else{
                this.errmessage='Podano błędną ilość!';
                
            }},
            oszczedz(){
                return this.value2*12-this.value1*12;
            }

        

    }}
    
    



</script>
<style>



</style>