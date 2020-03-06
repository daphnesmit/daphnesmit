import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { theme } from '@/theme/theme'

const StyledButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '9px 30px',
    border: '2px solid',
    borderRadius: '30px',
    minHeight: '48px',
    width: 'max-content',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1.6,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderColor: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    fontFamily: [theme.fonts.primary].join(','),
    transition: '200ms',
    '&::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      margin: 'auto',
      position: 'absolute',
      zIndex: '-1',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      backgroundColor: theme.colors.secondary,
      transition: 'transform 250ms cubic-bezier(.38,.32,.36,.98) 0s',
      transform: 'scaleX(0)',
      transformOrigin: 'right center',
    },
    '&:hover': {
      backgroundColor: theme.colors.primary,
      transform: 'translate3d(0,0,0)',
      borderColor: theme.colors.secondary,
      boxShadow: 'none',
      '&::before': {
        transform: 'scale(1)',
        transformOrigin: 'left center',
      },
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(4,31,121,.2)',
    },
  },
})(Button)

export default StyledButton
