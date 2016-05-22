import mainHeader from './main-header'
import mainFooter from './main-footer'
import mainSidebar from './main-sidebar'
import dashboard from './dashboard'

export default (ngModule) => {
  mainHeader(ngModule)
  mainFooter(ngModule)
  mainSidebar(ngModule)
  dashboard(ngModule)
}
