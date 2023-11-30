import poke from '../assets/Pokemon_Solid.ttf'
 
 export const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    margo: 'auto',
    width: '100vw',
    height: '100vh',
    background: '#171717',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 300ms ease',
    overflow: 'hidden',
    zIndex: 1000,
    transition: 'opacity 1s ease-out'
  },
  inner: {
    width: 100,
    height: 3,
    background: '#272727',
    textAlign: 'center',
  },
  bar: {
    height: 3,
    width: '100%',
    background: 'white',
    transition: 'transform 200ms',
    transformOrigin: 'left center',
  },
  data: {
    display: 'inline-block',
    // position: 'relative',
    fontVariantNumeric: 'tabular-nums',
    marginTop: '2.8em',
    color: '#f0f0f0',
    fontSize: '1.6em',
    fontFamily:`poke`,
    marginLeft: '-2em',
 
  }}