import AsyncStorageHelper from './AsyncStorageHelper'

const StorageState = {
  method_id: 'method_id',
}

AsyncStorageHelper.init({
  method_id: 0,
})

AsyncStorageHelper.use('APP_STORAGE_NAME')

export { StorageState }
