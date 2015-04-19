export default (ngModule) => {
  require('./main-header')(ngModule)
  require('./main-footer')(ngModule)
  require('./main-sidebar')(ngModule)
  require('./dashboard')(ngModule)
}
