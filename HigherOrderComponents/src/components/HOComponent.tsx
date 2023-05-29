import { useEffect } from "react"
import { JSX } from "react/jsx-runtime"


const higherOrderComponent = (WrappedComponent: JSX.IntrinsicAttributes) => {
    return (props: JSX.IntrinsicAttributes) => {
        useEffect(() => {
            console.log('I am a higher order component')
            return () => {
                console.log('I am unmounting')
            }
        }, [])
        return (
            <div>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

type HOProps = {
    message: string
}

const HOComponent = (props: HOProps) => {
    return (
        <div>{props.message}</div>
    )
}

const EnhancedComponent = higherOrderComponent(HOComponent)

export default EnhancedComponent