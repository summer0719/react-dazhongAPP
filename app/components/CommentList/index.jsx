import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item/index.jsx'
import './style.less'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      const data = this.props.data;
        return (
          <div className="detail-info">
            {
              data.map((item, index) => {
                return  <Item key={index}  data={item}/>
              })
            }
          </div>
        )
    }
    handler() {
      window.history.back();
    }
}

export default CommentList
