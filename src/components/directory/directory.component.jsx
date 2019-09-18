import React from 'react';
import MenuItem from './../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './directory.styles.scss';
import { selectDirectorySection } from '../../redux/directory-reducer/directory-selector';

const Directory = ({sections})=>
 (
    <div className='directory-menu'>
        {
          sections.map(({id,...otherSectionProps})=>{
              return(
                  <MenuItem key={id}{...otherSectionProps} />
              )
          })
        }
      
    </div>
  )




const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
})
export default  connect(mapStateToProps)(Directory);