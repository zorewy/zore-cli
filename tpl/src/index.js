import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
// import {createLogger} from 'redux-logger'
import {Router} from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import History from '@/components/Common/History'
import Routers from '@/router/Routers'
import rootReducer from '@/handleMiddleWare/reducers'
import rootSaga from '@/handleMiddleWare/sagas'
import './common/style/common.css'
// const loggerMiddleware = createLogger()
const sagaMiddleWare = createSagaMiddleware(rootSaga)
const store = createStore(rootReducer, applyMiddleware(
	sagaMiddleWare,
	// loggerMiddleware
))
sagaMiddleWare.run(rootSaga)
ReactDOM.render(
	<Provider store={store}>
		<Router history={History}>
			<div>
				<Routers/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
)