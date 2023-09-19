import msoffice from '../assets/svg/skills/microsoftoffice.svg'
import cplus from './../assets/png/skills/c++.png'
import js from '../assets/png/skills/js.png'
import html from './../assets/png/skills/html.png'
import css from './../assets/png/skills/css.webp'
import tailwind from './../assets/png/skills/tailwind.png'
import metarial from './../assets/png/skills/metarial.png'
import node from './../assets/png/skills/node.png'
import react from './../assets/png/skills/react.png'
import next from './../assets/png/skills/next.jpg'
import reactNative from './../assets/png/skills/reactNative.png'
import mongo from './../assets/png/skills/mongo.png'
import github from './../assets/png/skills/github.png'
import gitlab from './../assets/png/skills/gitlab.png'
import manage from './../assets/png/skills/projectManagement.png'
import planning from './../assets/png/skills/projectPlanning.png'
import self from './../assets/png/skills/selfEsteem.png'
import techWrite from './../assets/png/skills/technical-writing.png'

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase()
  switch (skillID) {
    case 'c++':
      return cplus
    case 'javascript':
      return js
    case 'html':
      return html
    case 'css':
      return css
    case 'tailwind css':
      return tailwind
    case 'metarial ui':
      return metarial
    case 'node js':
      return node
    case 'react js':
      return react
    case 'next js':
      return next
    case 'react native':
      return reactNative
    case 'mongo db':
      return mongo
    case 'github':
      return github
    case 'gitlab':
      return gitlab
    case 'microsoft office':
      return msoffice
    case 'project management':
      return manage
    case 'project planning':
      return planning
    case 'self esteem':
      return self
    case 'technical writing':
      return techWrite
    default:
      break
  }
}
