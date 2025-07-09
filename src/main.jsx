import { createRoot } from 'react-dom/client'

import './style.scss';

import Routing from './routing/Routing'

createRoot(document.getElementById('root')).render(
  <>
    <Routing />
  </>
)
