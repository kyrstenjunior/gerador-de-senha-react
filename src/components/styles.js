import { styled } from "@stitches/react";
import styles from 'styled-components';
import { violet, blackA } from '@radix-ui/colors';
import * as SliderPrimitive from '@radix-ui/react-slider';

export const Container = styled("div", {
  maxWidth: 480,
  width: "100%",
  marginTop: 14,
  marginBottom: 14
});

export const StyledSlider = styled(SliderPrimitive.Root, {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    width: "100%",
  
    '&[data-orientation="horizontal"]': {
      height: 20,
    },

    '&[data-orientation="vertical"]': {
        flexDirection: 'column',
        width: 20,
        height: 100,
      },
    });

    export const StyledTrack = styled(SliderPrimitive.Track, {
        backgroundColor: blackA.blackA10,
        position: 'relative',
        flexGrow: 1,
        borderRadius: '9999px',
      
        '&[data-orientation="horizontal"]': { height: 3 },
        '&[data-orientation="vertical"]': { width: 3 },
      });
      
      export const StyledRange = styled(SliderPrimitive.Range, {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '9999px',
        height: '100%',
      });
      
      export const StyledThumb = styled(SliderPrimitive.Thumb, {
        all: 'unset',
        display: 'block',
        width: 20,
        height: 20,
        backgroundColor: 'white',
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        borderRadius: 10,
        '&:hover': { backgroundColor: violet.violet3 },
        '&:focus': { boxShadow: `0 0 0 5px ${blackA.blackA8}` },
      });

      export const BtnPassword = styled("button", {
        marginTop: 30,
        marginBottom: 30,
        width: "100%",
        borderRadius: 8,
        padding: 8,
        border: "1px solid transparent",
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#87BE22",
        cursor: "pointer",
        transition: "border-color 0.25s",
        
        '&:hover': {
          borderColor: "white",
        },

        '&:focus, focus-visible': {
          outline: "4px auto -webkit-focus-ring-color"
        }
        
      });

      export const BoxPassword = styled("div",  {
        height: 60,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.40)",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        border: "1px solid #313131",
        cursor: "pointer",
        transition: "500ms",

        '&:hover': {
          transform: "scale(1.05)"
        }
      });