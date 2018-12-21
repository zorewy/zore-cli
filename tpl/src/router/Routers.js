/** 2018/11/26 16:36
 *作者: Yudong.Chen
 *文件: Routers.js
 *功能: 路由管理
 */
import React, {Component} from 'react'
import {Route, withRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import asyncLoad from '@/components/AsyncLoad'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import ContainerMsg from '@/components/Common/ContainerMsg'
import Config from '@/config/config'
import requireAuthentication from '@/components/Common/RequireAuthentication'

const AsyncHome = asyncLoad(() => import(/* webpackChunkName: "Home" */'../components/Home'))
const AsyncNoFound = asyncLoad(() => import(/* webpackChunkName: "NoFound" */'../components/NoFound'))
const AsyncLogin = asyncLoad(() => import(/* webpackChunkName: "Login" */'../components/Login'))
const AsyncGoodsManage = asyncLoad(() => import(/* webpackChunkName: "GoodsManage" */'../components/GoodsManage/GoodsList'))
const AsyncGoodsDetail = asyncLoad(() => import(/* webpackChunkName: "GoodsDetail" */'../components/GoodsManage/GoodsDetail'))
const AsyncOrderManage = asyncLoad(() => import(/* webpackChunkName: "OrderManage" */'../components/OrderManage'))
const AsyncOrderDetails = asyncLoad(() => import(/* webpackChunkName: "OrderDetails" */'../components/OrderManage/OrderDetails'))
const AsyncMemberCard = asyncLoad(() => import(/* webpackChunkName: "MemberCard" */'../components/CustomerManage/memberCard'))
const AsyncTagsManage = asyncLoad(() => import(/* webpackChunkName: "TagsManage" */'../components/CustomerManage/tagsManage'))
const AsyncStaffManage = asyncLoad(() => import(/* webpackChunkName: "StaffManage" */'../components/StaffManage/StaffList'))
const AsyncStaffDetail = asyncLoad(() => import(/* webpackChunkName: "StaffDetail" */'../components/StaffManage/StaffDetail'))
const AsyncRoleManage = asyncLoad(() => import(/* webpackChunkName: "RoleManage" */'../components/RoleManage/RoleList'))
const AsyncRoleDetail = asyncLoad(() => import(/* webpackChunkName: "RoleDetail" */'../components/RoleManage/RoleDetail'))
const AsyncStoreManage = asyncLoad(() => import(/* webpackChunkName: "StoreManage" */'../components/StoreManage/StoreList'))
const AsyncStoreDetail = asyncLoad(() => import(/* webpackChunkName: "StoreDetail" */'../components/StoreManage/StoreDetail'))

let versionScript = null

class Routers extends Component {
  constructor(props) {
    super(props)
    if (Config.isProduction) {
      versionScript = document.createElement('script')
      versionScript.src = window.location.origin + '/version.js?v=' + new Date().getTime()
      let s = document.getElementsByTagName('body')[0]
      s.appendChild(versionScript)
    }
  }

  componentWillUpdate() {
    if (Config.isProduction) {
      versionScript = document.createElement('script')
      versionScript.src = window.location.origin + '/version.js?v=' + new Date().getTime()
      let s = document.getElementsByTagName('body')[0]
      s.appendChild(versionScript)
    }
  }

  componentDidMount() {
    if (versionScript) {
      let s = document.getElementsByTagName('body')[0]
      s.removeChild(versionScript)
    }
  }

  componentDidUpdate() {
    if (versionScript) {
      let s = document.getElementsByTagName('body')[0]
      s.removeChild(versionScript)
    }
  }

  render() {
    const {props} = this
    const {loginData} = props
    Config.loginData = loginData
    let staffList = [];
    ((Config.loginData && Config.loginData.menuVos) || []).forEach(function (item) {
      if (item.menuId === 'staffManageIndex') {
        item.subMenus.forEach(function (item) {
          let routerObj = {path: item.menuId, name: item.menuName}
          staffList.push(routerObj)
        })
      }
    })
    Config.staffList = staffList
    //通过jsonp进行前端版本控制
    let frontendVersion = sessionStorage.getItem('frontendVersion')
    window.getVersion = version => {
      if ((frontendVersion && version !== frontendVersion) || (window.frontendVersion && version !== window.frontendVersion)) {
        window.location.reload() // 刷新页面
      }
      sessionStorage.setItem('frontendVersion', version) // 保存 以便下次使用判断
      window.frontendVersion = version // 保存 以便下次使用判断
    }
    if (!loginData) {
      return (
        <div>
          <Switch>
            <Route path="/login" component={AsyncLogin}/>
            <Route component={AsyncLogin}/>
          </Switch>
        </div>
      )
    } else {
      return (
        <div className="g-main">
          <Sidebar menuList={Config.loginData.menuVos} history={props.history}/>

          <div className="g-container">
            <Header/>
            <ContainerMsg/>
            <div className="g-contain">
              <Switch>
                <Route exact path="/" component={requireAuthentication(AsyncHome)}/>
                <Route path="/home" component={requireAuthentication(AsyncHome)}/>
                <Route path="/goodsManage" component={requireAuthentication(AsyncGoodsManage)}/>
                <Route path="/goodsDetail/:detailId/:action" component={requireAuthentication(AsyncGoodsDetail)}/>
                <Route path="/orderManage" component={requireAuthentication(AsyncOrderManage)}/>
                <Route path="/orderDetails/:cardNo" component={requireAuthentication(AsyncOrderDetails)}/>
                <Route path="/memberCard" component={requireAuthentication(AsyncMemberCard)}/>
                <Route path="/tagsManage" component={requireAuthentication(AsyncTagsManage)}/>
                <Route path="/staffManage" component={requireAuthentication(AsyncStaffManage)}/>
                <Route path="/staffDetail/:detailId/:action" component={requireAuthentication(AsyncStaffDetail)}/>
                <Route path="/roleManage" component={requireAuthentication(AsyncRoleManage)}/>
                <Route path="/roleDetail/:detailId/:action" component={requireAuthentication(AsyncRoleDetail)}/>
                <Route path="/storeManage" component={requireAuthentication(AsyncStoreManage)}/>
                <Route path="/storeDetail/:detailId/:action" component={requireAuthentication(AsyncStoreDetail)}/>
                <Route component={AsyncNoFound}/>
              </Switch>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginData: state.LoginReducer.stateData.loginData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routers))
