import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {

    state = {
        hasError: false
    }

    // 处理错误
    static getDerivedStateFromError(error) {
        console.log("发生错误了");
        return {
            hasError: true
        }
    }

    // 记录错误
    componentDidCatch(error, info) {
        console.log("记录错误信息");
    }

    render() {
        if (this.state.hasError) {
            return <h1>出现错误了</h1>
        }
        return this.props.children
    }
}
