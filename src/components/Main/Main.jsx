import React from 'react';
import "./main.css";
import { motion } from 'framer-motion';
import Rikov from '../../img/rikonavt-sxDO1djCQFg-unsplash.jpg';
import Bave from '../../img/bave-pictures-fl7bASYZgXo-unsplash.jpg';
import Philip from '../../img/philip-martin-D6MmPV6SHqg-unsplash.jpg';
import Quaid from '../../img/quaid-lagan-92YQRw3-__I-unsplash.jpg';
import Joanna from '../../img/joanna-nix-walkup-H3giPYTXsyk-unsplash.jpg';
import Terrick from '../../img/terricks-noah-n9R0MN3XGvY-unsplash.jpg';
import Etty from '../../img/etty-fidele-nF8eo2nX374-unsplash.jpg';
import Wadi from '../../img/wadi-lissa-4U1x6459Q-s-unsplash.jpg';
import Steven from '../../img/steven-jones-ZxDfQ1OF8Zg-unsplash.jpg';
import Guil from '../../img/guilherme-stecanella-UrS5HkBr1Rc-unsplash.jpg';
import JessicaC from '../../img/jessica-felicio-CT6G8Mz4grs-unsplash.jpg';
import Hou from '../../img/houcine-ncib-GSLBz9e8FpQ-unsplash.jpg';

const Main = () => {
  return (
    <div className='main'>
      <div className='text-box'>
        <h2 className='main-text'>More than a million words...</h2>
      </div>
        <div className='container'>
          <div className='containerOne'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition= {{ ease: "easeInOut", delay: .1, duration: 0.8, }}
              whileHover={{ scale: [null, 1.5, 1.4] }}
              whileTap={{ scale: 50, }}
              src={Rikov} alt="img" className='rikovImg' />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition= {{ ease: "easeInOut", delay: .2, duration: 0.8, }}
              whileHover={{ scale: [null, 1.5, 1.4]}}
              whileTap={{ scale: 2000, }}
             src={Bave} alt="img" className='baveImg' />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition= {{ ease: "easeInOut", delay: .1, duration: 0.8, }}
              whileHover={{ scale: [null, 1.5, 1.4] }}
             src={Philip} alt="img"  className='philipImg'/>
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: [null, 1.5, 1.4] }}
              src={Quaid} alt="img" className='quaidImg' />
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: [null, 1.5, 1.4] }}
              src={Joanna} alt="img" className='joannaImg' />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: [null, 1.5, 1.4] }}
             src={Terrick} alt="img" className='terrickImg'/>
          </div>

          <div className='containerTwo'>
            <motion.img
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1, scale: [ 1, 1.5] }}
               transition= {{ ease: "easeInOut", delay:.51, duration: .5, }}
              src={Etty} alt="img" className='ettyImg' />
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: [ 1, 1.5] }}
              transition= {{ ease: "easeInOut", delay: .5, duration: .5, }}
              src={Wadi} alt="img" className='wadiImg' />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: [ 1, 1.5] }}
              transition= {{ ease: "easeInOut", delay: .5, duration: .5, }}
              src={Steven} alt="img" className='stevenImg' />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: [ 1, 1.5] }}
              transition= {{ ease: "easeInOut", delay: .5, duration: .5, }}
              src={Guil} alt="img" className='guilImg' />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: [ 1, 1.5] }}
              transition= {{ ease: "easeInOut", delay: .5, duration: .5, }}
              src={JessicaC} alt="img" className='jesImg' />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: [ 1, 1.5], }}
              animate={{x: 20}}
              transition= {{ ease: "easeInOut", delay: .5, duration: .5, }}
              src={Hou} alt="img" className='houImg' />
          </div>
        </div>
    </div>
  )
}

export default Main