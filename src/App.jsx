import DisplayList from './DisplayList';
import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text :"",
      select:'select a priority',
      items:[],
     
    }
  }  
  
  
handleSubmit(event){
  event.preventDefault(); 
  var newItems= this.state.items;
  newItems.push({text: this._inputElement.value,
    priority:this._inputSelect.value,
    key:Date.now()});
  this.setState({items:newItems});
  this._inputElement.value = "";
  this._inputSelect.value = "";
}
handleSave(event){
  event.preventDefault();
  var newItems=this.state.items;
  var Update_priority=this._inputUpdateSelect.value;
  if(Update_priority=='High Priority') Update_priority=1;
  if(Update_priority=='Medium Priority') Update_priority=2;
  if(Update_priority=='Low Priority') Update_priority=3;
  
  newItems.push({text:this._inputUpdate.value,
                 priority:Update_priority,
                key:Date.now()});
  this.setState({items:newItems}); 
  $('#edit_div').css('display','none');          
  
}
  
  handleDelete(itemDelete){
  var newItems = this.state.items.filter((_item)=>{
    return _item !=itemDelete
  });
  this.setState({items:newItems});
  }
  handleEdit(itemEdit){
    
    $('#edit_div').css('display','block');
    var newItems = this.state.items.filter((_item)=>{
       _item =itemEdit;
       this._inputUpdate.value=itemEdit.text
    });
    this.setState({items:newItems});
    
  }
 render() {
    return (
      <div className='container'>
        <div style={{color:"white",borderBottom:"1px solid white"}}>
         <h1>Very Simple Todo App</h1>
         <p>Track all of the things</p>
        </div>
        <div className="container" style={{marginTop:"10",width:"35%",float:"left"}}>
            <div className="panel-default row" style={{width:"100%"}}>
             <div className="panel-heading col-xs-4" style={{width:"100%"}}>
               <label>Add New Todo</label>
             </div>
            </div>
            <div className="panel-default row" style={{width:"100%"}}>
              <div className="panel-body col-xs-4" style={{padding:5,width:"100%",background:"white"}}>
                <p>I want to..</p>
                <textarea className="create-todo-text form-control" ref={(a) => this._inputElement = a} style={{marginBottom:8}}></textarea>
                <select className="create-todo-priority form-control" ref={(b) => this._inputSelect = b} style={{marginBottom:8}}>
                  <option selected='selected'>Select a priority</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div> 
            <div className="panel-default row" style={{width:"100%"}}> 
             <div className="panel-heading col-xs-4" style={{width:"100%"}}>
               <button className="create-todo btn btn-success btn-lg" onClick={this.handleSubmit.bind(this)} style={{width:150}}>Add</button>
             </div>
            </div>
        </div>
        <div className="container" style={{float:"left",width:"60%",marginTop:"10"}}>
           <div className="panel-default row" style={{width:"100%"}}>
             <div className="panel-heading col-xs-4" style={{width:"100%"}}>
                <label>View Todos</label>
             </div>
            </div> 
            <div id="edit_div" style={{display: "none"}}>
            <div className="panel-default row" style={{width:"100%"}}>
             <div className="panel-body col-xs-4" style={{background:"#FFFF99",width:"100%",float:"left"}}>
               <p style={{color:'#C46210'}}>Description</p>
               <textarea className="update-todo-text form-control" ref={(c) => this._inputUpdate = c}></textarea>
             </div>
            </div> 
            <div className="panel-default row" style={{width:"100%"}}> 
              <div className="panel-body col-xs-2" style={{background:"#FFFF99",width:"50%",height:"80px"}}>
               <p style={{color:'#C46210'}}>Due Date</p>
               <input className="update-todo-date form-control" type="text"/>
              </div>
              <div className="panel-body col-xs-2" style={{background:"#FFFF99",width:"50%",height:"80px"}}>
               <p style={{color:'#C46210'}}>Priority</p>
               <select className="update-todo-priority form-control" ref={(d) => this._inputUpdateSelect = d} style={{width:"150px"}}>
                  <option>Select a Priority</option>
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                  <option>Low Priority</option>
               </select>
              </div>
              <div className="panel-body col-xs-2" style={{background:"#FFFF99",width:"70%",height:"60px"}}>
              </div>
              <div className="panel-body col-xs-2" style={{background:"#FFFF99",width:"30%",height:"60px"}}>
               <button className="update-todo btn btn-success btn-md" onClick={this.handleSave.bind(this)} id="SaveButton">Save</button>
              </div>
              </div>
              </div>
           <div className="panel-default row" style={{width:"100%"}} >
              <div id="todo" className="panel-body col-xs-4" style={{background:"white",width:"100%",float:"left"}}>
              <DisplayList items={this.state.items} handleEdit={this.handleEdit.bind(this)} handleDelete={this.handleDelete.bind(this)}/>
              </div>
           </div>
        </div>     
      </div>
     
    );
  }
}

export default App;
