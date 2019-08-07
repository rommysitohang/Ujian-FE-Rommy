import React,{Component} from 'react'
import { Table  } from 'reactstrap'
    // COMPONENT
    // EXPORT IMPORT
    // PROPS
    // STATE
    // LIFECYCLE
    // REACT-ROUTER-DOM

class Todo extends Component{
    state = {
        data : [],
        selectedEdit : null
    }

    onBtnAddClick = () => {
        // Get Value
        var nama = this.refs.terserah.value
        var usia = this.refs.terserah.value
        var pekerjaan = this.refs.terserah.value
        console.log(nama)
        console.log(usia)
        console.log(pekerjaan)
        var arr = this.state.data
        var obj = {
            nama,
            usia,
            pekerjaan
        }
        arr.push(obj)
        this.setState({data : arr})

        // Value disimpan di state
    }
    onBtnEdit = (a) => {
        this.setState({selectedEdit : a})
    }
    onBtnDelete = (index) => {
        var arr = this.state.data
        arr.splice(index , 1)
        this.setState({data : arr})
    }

    onBtnSave = (index) => {
        var arr = this.state.data
        arr[index].nama = this.refs.namaEdit.value
        arr[index].usia = this.refs.usiaEdit.value
        arr[index].pekerjaan = this.refs.pekerjaanEdit.value
        this.setState({data : arr, selectedEdit : null})

    }

    printDataNama = () => {
        var functionMap = (val,index) => {
            if(this.state.selectedEdit == index){
                return(
                <tr key={index}>
                    {/* <td>{index +1}</td> */}
                    <td><input type='text' ref='namaEdit' className='form-control' defaultValue={val.nama} /></td>
                    <td><input type='text' ref='usiaEdit' className='form-control' defaultValue={val.usia} /></td>
                    <td><input type='date' ref='pekerjaanEdit' className='form-control' defaultValue={val.pekerjaan} /></td>
                    <td> <input type='button' className='btn btn-success' onClick={() =>  this.onBtnSave(index)} value='Save' /> </td>
                    <td> <input type='button' className='btn btn-info' onClick={() => this.setState({selectedEdit : null})} value='Cancel' /> </td>                        
                </tr>
                )
            }
            return(
                <tr key={index}>                
                    <td>{val.nama}</td>
                    <td>{val.usia}</td>
                    <td>{val.pekerjaan}</td>
                    <td> <input type='button' className='btn btn-primary' onClick={() =>  this.onBtnEdit(index)} value='Edit' /> </td>
                    <td> <input type='button' className='btn btn-danger' onClick={() => this.onBtnDelete(index)} value='Delete' /> </td>                        
                </tr>
            )
        }
        var jsx = this.state.data.map(functionMap)
        // console.log(jsx)

        return jsx
    }

    render(){
        return(
            <div className='container'>
                <h1> SOAL 1 </h1>
                <Table> 
                    <thead>
                        <tr>
                            <td>Nama</td>
                            <td>Usia</td>
                            <td>Pekerjaan</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.printDataNama()}
                    </tbody>    
                </Table>  

                <div className='row'>
                    <div className='col-md-2'> 
                        <input ref='terserah' className='form-control' type='text' placeholder='masukkan nama' />
                    </div>
                    <div className='col-md-2'> 
                        <input ref='terserah' className='form-control' type='text' placeholder='masukkan usia' />
                    </div>
                    <div className='col-md-3'> 
                        <input ref='terserah' className='form-control' type='text' placeholder='masukkan pekerjaan' />
                    </div>
                    <div className='col-md-4'>
                        <input className='form-control btn-success' onClick={this.onBtnAddClick} type='button' value='add' />
                    </div>
                </div> 
            </div>
        )
    }
}

export default Todo