import React from 'react'

export default function Button(props) {
  return (
    <button
        onClick={props.onPress}
        //disabled={props.disabled}
        /*className={styles.btn}
        style={styleButton}*/
    >
        {props.children}
    </button>
  )
}
