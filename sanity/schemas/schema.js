import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import client from 'part:@sanity/base/client'

import experience from './experience'
import skill from './skill'
import social from './social'
import project from './project'
import pageInfo from './pageinfo'




export default createSchema({
  
  name: 'default',
  types: schemaTypes.concat([

    skill,
    pageInfo,
    experience,
    social,
    project,
    
  ]),
})
