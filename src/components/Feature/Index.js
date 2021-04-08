import React from 'react'
import {FeatureContainer , FeatureButton} from './FeatureElement'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1> Pizza of the day</h1>
            <p>Truffle alfredo sauce topped with 24 carrot gold dust</p>
            <FeatureButton>Oredr now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
