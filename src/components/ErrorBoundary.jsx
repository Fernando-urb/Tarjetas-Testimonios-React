import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    if (this.props.onError) {
      try {
        this.props.onError(error, info)
      } catch {}
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback(this.state.error)
          : this.props.fallback
      }
      return (
        <div style={{
          padding: '1rem',
          border: '1px solid #e00',
          background: '#ffe6e6',
          color: '#900',
          borderRadius: 8
        }}>
          <strong>Something went wrong.</strong>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

