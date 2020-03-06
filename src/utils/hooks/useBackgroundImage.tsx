import { useEffect, useReducer } from 'react'

interface BackgroundImageState {
  source: string
  loaded: boolean
  error: boolean
}

interface ActionLoaded {
  type: 'LOADED'
  source: string
}
interface ActionError {
  type: 'ERROR'
  source: string
}
type Action = ActionLoaded | ActionError
type State = BackgroundImageState

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOADED':
      return {
        ...state,
        source: action.source,
        loaded: true,
        error: false,
      }
    case 'ERROR':
      return {
        ...state,
        source: action.source,
        loaded: false,
        error: true,
      }
    default:
      return state
  }
}

const placeholder = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
const initialState: BackgroundImageState = {
  loaded: false,
  error: false,
  source: placeholder,
}

export function useBackgroundImage(src: string) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let image: HTMLImageElement = new Image()
    image.onload = () => dispatch({ type: 'LOADED', source: src })

    image.onerror = () => dispatch({ type: 'ERROR', source: placeholder })

    image.src = src
    return () => {
      image.onerror = null
      image.onload = null
      // @ts-ignore
      image = null
    }
  }, [src])

  return { ...state, src }
}
