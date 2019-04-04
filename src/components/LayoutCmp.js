import React, {Component, Fragment} from 'react';

import Header from './HeaderCmp';
import Footer from './FooterCmp';

const defaultProps = {
    showFooter : true,
    showHeader : true,
    showLeftSidebar : true
};

class LayoutCmp extends Component {

    constructor(props){
        super(props);
        this.state = {
            showFooter : true,
            showHeader : true,
            headerProps : {}
        }
    }

    componentDidMount() {
        if(this.props.showHeader){
            document.body.classList.add("header-fixed");
        }
    }

    renderHeader(showHeader, headerProps){
        if(showHeader){
            const props = headerProps || {};
            return  <Header headerProps={props}></Header>
        }else{
            return null;
        }
    }

    renderFooter(showFooter){
        if(showFooter){
            return <Footer/>
        }else{
            return null;
        }
    }

    render() {
        const _props = Object.assign({}, defaultProps, this.props);
        const { children, showHeader, showFooter, headerProps} = _props;
        return (
            <Fragment>
                {this.renderHeader(showHeader, headerProps)}
                    { children }
                {this.renderFooter(showFooter)}
            </Fragment>
        );
    }
}

export default LayoutCmp;
