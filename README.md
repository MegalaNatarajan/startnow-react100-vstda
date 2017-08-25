import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText:'',
      todoSelect:'Select a priority',
      todoEditText:'',
      todoEditSelect:'Select a Priority'
    }
  }  
  
  
  todoText (event){
    this.setState({
     todoText:event.target.value,
    })
  } 

  todoSelect (event){
    this.setState({
     todoSelect:event.target.value,
    })
  } 
  
  todoEditText (event){
    this.setState({
     todoEditText:event.target.value,
    })
  }

  todoEditSelect (event){
    this.setState({
     todoEditSelect:event.target.value,
    })
  }   

  todoSave(event){
      
    if(this.state.todoEditSelect == 'High Priority'){
      
         $('#todo').append('<div id="p_color" class="row"><div class="col-xs-9"><input type="checkbox" /><span id="para">'+this.state.todoEditText+'</span></div><div class="col-xs-1"><a id="edit" class="edit-todo" href="#"><img src="https://openclipart.org/download/237987/edit26.svg" width=20 height=20/></a></div><div class="col-xs-1"><a id="delete" class="delete-todo" href="#"><img src="http://png-4.findicons.com/files/icons/1580/devine_icons_part_2/512/trash_recyclebin_empty_closed.png" width=20 height=20/></a></div></div>');
         $('.delete-todo').on("click",function(){$(this).parent().parent().remove()});
         $('.edit-todo').on("click",function(event){$('#edit_div').css('display','block');$('.update-todo-text').val($(this).closest('div').prev().find('span').text());$(this).parent().parent().remove()});
         $("<style>#p_color { background: #ffcdd2;height:40px;padding:10px;color:brown; }</style>" ).appendTo( "#todo" );
         $('#edit_div').css('display','none'); 
        }
       if(this.state.todoEditSelect ==  'Medium Priority'){
        
        $('#todo').append('<div id="p_color1" class="row"><div class="col-xs-9"><input type="checkbox" /><span id="para1">'+this.state.todoEditText+'</span></div><div class="col-xs-1"><a id="edit1" class="edit-todo" href="#"><img src="https://openclipart.org/download/237987/edit26.svg" width=20 height=20/></a></div><div class="col-xs-1"><a id="delete1" class="delete-todo" href="#"><img src="http://png-4.findicons.com/files/icons/1580/devine_icons_part_2/512/trash_recyclebin_empty_closed.png" width=20 height=20/></a></div></div>');
        $('.delete-todo').on("click",function(){$(this).parent().parent().remove()});
        $('.edit-todo').on("click",function(){$('#edit_div').css('display','block');$('.update-todo-text').val($(this).closest('div').prev().find('span').text());$(this).parent().parent().remove()});
        $("<style>#p_color1 { background: #fff176;height:40px;padding:10px;color:#C46210; }</style>" ).appendTo( "#todo" );
        $('#edit_div').css('display','none');
      }
     if(this.state.todoEditSelect == 'Low Priority'){
        
        $('#todo').append('<div id="p_color2" class="row"><div class="col-xs-9"><input type="checkbox" /><span id="para2">'+this.state.todoEditText+'</span></div><div class="col-xs-1"><a id="edit2" class="edit-todo" href="#"><img src="https://openclipart.org/download/237987/edit26.svg" width=20 height=20/></a></div><div class="col-xs-1"><a id="delete2" class="delete-todo" href="#"><img src="http://png-4.findicons.com/files/icons/1580/devine_icons_part_2/512/trash_recyclebin_empty_closed.png" width=20 height=20/></a></div></div>');
        $('.delete-todo').on("click",function(){$(this).parent().parent().remove()});
        $('.edit-todo').on("click",function(){$('#edit_div').css('display','block');$('.update-todo-text').val($(this).closest('div').prev().find('span').text());$(this).parent().parent().remove()});
        $("<style>#p_color2 { background: #a5d6a7;height:40px;padding:10px;color:green;}</style>" ).appendTo( "#todo" );
        $('#edit_div').css('display','none');
      }
    
  }

  todoAdd (event){
    for(var i=0; i<li.length;i++){
    $("#ul").append('<li>'+this.state.todoText+'<a class="edit-todo" href="#"><img src="https://openclipart.org/download/237987/edit26.svg" width=20 height=20/></a><a class="delete-todo" href="#">delete</a></li>');
    $('.delete-todo').on('click',function(){$(this).closest('li').remove()});
    $('.edit-todo').on('click',function(){$('#edit_div').css('display','block');$('.update-todo-text').val($(this).closest('li').contents().not($("li").children()).text())}); 
    
    if(this.state.todoSelect ==1) {
      $('li').attr('id','li1');
       $('#li1').css('background','red')
    }
    else if(this.state.todoSelect ==2) {
      $('li').attr('id','li2');
      $('#li2').css('background','yellow')
    }
   else if(this.state.todoSelect ==3) {
    $('li').attr('id','li3');
    $('#li3').css('background','green')
   }
  }
   /*if(this.state.todoSelect == 1){
  
     $('#todo').append('<div id="p_color" class="row"><div class="col-xs-9"><input type="checkbox" /><span id="para">'+this.state.todoText+'</span></div><div class="col-xs-1"><a id="edit" class="edit-todo" href="#"><img src="https://openclipart.org/download/237987/edit26.svg" width=20 height=20/></a></div><div class="col-xs-1"><a id="delete" class="delete-todo" href="#"><img src="http://png-4.findicons.com/files/icons/1580/devine_icons_part_2/512/trash_recyclebin_empty_closed.png" width=20 height=20/></a></div></div>');
     $('.delete-todo').on("click",function(){$(this).parent().parent().remove()});
     $('.edit-todo').on("click",function(event){$('#edit_div').css('display','block');$('.update-todo-text').val($(this).closest('div').prev().find('span').text());$(this).parent().parent().remove()});
     $("<style>#p_color { background: #ffcdd2;height:40px;padding:10px;color:brown; }</style>" ).appendTo( "#todo" );
     
    }
   if(this.state.todoSelect == 2){
    
    $('#todo').append('<div id="p_color1" class="row"><div class="col-xs-9"><input type="checkbox" /><span id="para1">'+this.state.todoText+'</span></div><div class="col-xs-1"><a id="edit1" class="edit-todo" href="#"><img src="https://openclipart.org/download/237987/edit26.svg" width=20 height=20/></a></div><div class="col-xs-1"><a id="delete1" class="delete-todo" href="#"><img src="http://png-4.findicons.com/files/icons/1580/devine_icons_part_2/512/trash_recyclebin_empty_closed.png" width=20 height=20/></a></div></div>');
    $('.delete-todo').on("click",function(){$(this).parent().parent().remove()});
    $('.edit-todo').on("click",function(){$('#edit_div').css('display','block');$('.update-todo-text').val($(this).closest('div').prev().find('span').text());$(this).parent().parent().remove()});
    $("<style>#p_color1 { background: #fff176;height:40px;padding:10px;color:#C46210; }</style>" ).appendTo( "#todo" );
  }
 if(this.state.todoSelect == 3){
    
    $('#todo').append('<div id="p_color2" class="row"><div class="col-xs-9"><input type="checkbox" /><span id="para2">'+this.state.todoText+'</span></div><div class="col-xs-1"><a id="edit2" class="edit-todo" href="#"><img src="https://openclipart.org/download/237987/edit26.svg" width=20 height=20/></a></div><div class="col-xs-1"><a id="delete2" class="delete-todo" href="#"><img src="http://png-4.findicons.com/files/icons/1580/devine_icons_part_2/512/trash_recyclebin_empty_closed.png" width=20 height=20/></a></div></div>');
    $('.delete-todo').on("click",function(){$(this).parent().parent().remove()});
    $('.edit-todo').on("click",function(){$('#edit_div').css('display','block');$('.update-todo-text').val($(this).closest('div').prev().find('span').text());$(this).parent().parent().remove()});
    $("<style>#p_color2 { background: #a5d6a7;height:40px;padding:10px;color:green;}</style>" ).appendTo( "#todo" );
    
  }*/
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
                <textarea className="create-todo-text form-control" value={this.state.todoText} onChange={this.todoText.bind(this)} style={{marginBottom:8}}></textarea>
                <p>How much of a priority is this?</p>
                <select className="create-todo-priority form-control" value={this.state.todoSelect} onChange={this.todoSelect.bind(this)} style={{marginBottom:8}}>
                  <option selected='selected'>Select a priority</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div> 
            <div className="panel-default row" style={{width:"100%"}}> 
             <div className="panel-heading col-xs-4" style={{width:"100%"}}>
               <button className="create-todo btn btn-success btn-lg" onClick={this.todoAdd.bind(this)} style={{width:150}}>Add</button>
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
               <textarea className="update-todo-text form-control" value={this.state.todoEditText} onChange={this.todoEditText.bind(this)}></textarea>
             </div>
            </div> 
            <div className="panel-default row" style={{width:"100%"}}> 
              <div className="panel-body col-xs-2" style={{background:"#FFFF99",width:"50%",height:"80px"}}>
               <p style={{color:'#C46210'}}>Due Date</p>
               <input className="update-todo-date form-control" type="text"/>
              </div>
              <div className="panel-body col-xs-2" style={{background:"#FFFF99",width:"50%",height:"80px"}}>
               <p style={{color:'#C46210'}}>Priority</p>
               <select className="update-todo-priority form-control" value={this.state.todoEditSelect} onChange={this.todoEditSelect.bind(this)} style={{width:"150px"}}>
                  <option>Select a Priority</option>
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                  <option>Low Priority</option>
               </select>
              </div>
              <div className="panel-body col-xs-2" style={{background:"#FFFF99",width:"70%",height:"60px"}}>
              </div>
              <div className="panel-body col-xs-2" style={{background:"#FFFF99",width:"30%",height:"60px"}}>
               <button className="update-todo btn btn-success btn-md" onClick={this.todoSave.bind(this)} id="SaveButton">Save</button>
              </div>
            </div>
          </div>  
           <div className="panel-default row" style={{width:"100%"}} >
              <div id="todo" className="panel-body col-xs-4" style={{background:"white",width:"100%",float:"left"}}>
              <ul id='ul'></ul>
              </div>
           </div>
        </div>     
      </div>
     
    );
  }
}

export default App;
