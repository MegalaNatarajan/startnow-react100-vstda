import React, { Component } from 'react';
export default class DisplayList extends Component {
    
    render(){
        var styleList={background: 'white',color:'black'};
        var items = this.props.items;
        return <ul style={{listStyle:'none',paddingLeft:"10px"}}>
            {this.props.items.map((item,i) =>{
                if(item.priority==1) styleList={background:"#ffcdd2",color:'brown',height:'30px',paddingLeft:"10px",width:'100%'};
                if(item.priority==2) styleList={background:"#fff176",color:'#C46210',height:'30px',paddingLeft:"10px"};
                if(item.priority==3) styleList={background:"#a5d6a7",color:'green',height:'30px',paddingLeft:"10px"};
            return <li className="success" key={item.key} style={styleList}>
                     <input type="checkbox" style={{width:'8%'}} />
                     {item.text}
                     <a href="#" className="delete-todo" style={{width:'10%',marginLeft:'3%'}} onClick={this.props.handleDelete.bind(null,item)}><img src={'http://png-4.findicons.com/files/icons/1580/devine_icons_part_2/512/trash_recyclebin_empty_closed.png'} style={{width:'20px', height:'20px'}}/></a>
                     <a href="#" className="edit-todo" style={{width:'10%',marginLeft:'3%'}} onClick={this.props.handleEdit.bind(null,item)}><img src={'https://openclipart.org/download/237987/edit26.svg'} style={{width:'20px', height:'20px'}}/></a>
                </li> 
            })}
        
            </ul>;
    }
}