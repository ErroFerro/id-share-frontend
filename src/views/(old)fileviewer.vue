<script setup>

import data from '../data/array.json';
import { ref } from "vue";

let files = ref(data);
let mostra= ref(false);
let SelectedFileName= ref("");
let contenutoDownload=ref("");

const selectedProduct= ref();
// const selectedRowClass= ref("");


const onRowSelect = (event) => {
    SelectedFileName=event.data.nome;
    contenutoDownload=event.data.contenuto;
    // selectedRowClass='selected-row';
    // console.log(selectedRowClass)
    mostra=true;
};

const onRowUnselect = (event) => {
    mostra=false;
    // selectedRowClass.value = '';
};


const downloadFile=()=>{
  const content=JSON.stringify(contenutoDownload);

  const blob = new Blob([content], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = SelectedFileName;
  document.body.appendChild(a);
  a.click();

  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

const columns = [
    { field: 'nome', header: 'Nome', },
    { field: 'contenuto', header: 'Contenuto' },
    { field: 'commento', header: 'Commento' },
    { field: 'from', header: 'From' },
    { field: 'to', header: 'To' },
    { field: 'date', header: 'Date'}
];
</script>

<template>

<!-- IMPLEMENTARE:
-CLICK EVIDENZIA BARRA
-SCORRERE VERTICALE
-->

  <div id="container">
    <div id="table">
      <DataTable 
        v-model:selection="selectedProduct"
        :value="files" 
        selectionMode="single" 
        dataKey="id" 
        :metaKeySelection="false"
        @rowSelect="onRowSelect"
        @rowUnselect="onRowUnselect"
        tableStyle="width: 700px"
        removableSort
        scrollable
        scrollHeight="400px" 
        >

         <!-- TABELLA DINAMICA -->
         <Column class="p-column-title" sortable  v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        

        <!-- STESSA TABELLA MA STATICA
         <Column field="nome" header="Name"></Column>
        <Column field="contenuto" header="Country"></Column>
        <Column field="commento" header="Representative"></Column>
        <Column field="from" header="Company"></Column>
        <Column field="to" header="Company"></Column>
        <Column field="date" header="Company"></Column> -->
      </DataTable>
    </div>
  
    <button v-if="mostra" id="Download" @click="downloadFile">
      <img src="/img/download.png" alt="share image" />
      Scarica {{ SelectedFileName }}
    </button>

  </div>


</template>

<style scoped>

 #table{
  border: 5px solid var(--blue-primary);
  border-radius: 5px;
  padding: 0;

} 

#container {
  width: 415px;
  margin: 30px auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.selected-row{
  background-color: greenyellow;
}

#Download {
  background-color: var(--blue-primary);
}

@media (min-width: 800px){

            .container{
                width: 700px;
            }
            li{
                padding: 20px 30px;
                margin-right: 15px;
            }
            menu{
                font-size: 30px;
            }
        }


</style>