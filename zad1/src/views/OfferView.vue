<template>
    <div>
        <p>Kalkulator:</p>
        <input type="number"> <button>Sprawdź</button>
        <br><br>
        <div class="d-flex flex-row bg-light" >
            <div class="d-flex flex-column mx-auto">
                <div class="p-2">U nas zaplacisz</div>
                <div class="p-2">{{value1}}</div></div>
            <div class="d-flex flex-column mx-auto">
                <div class="p-2">Na allegro zaplacisz</div>
                <div class="p-2">{{value2}}</div>
                </div>
            

        </div>
    </div>

</template>
<script>


export default{
    data(){
        return{
            itemssold:0,
            value1:0,
            value2:1




        }
    }}
    methods:{
        function oblicz(value){
            value1=itemssold;
        }

    }
    
    



</script>
<style>



</style>