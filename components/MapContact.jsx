'use client';

import { motion } from "framer-motion";

export default function MapContact(){
    return(
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5253574196586!2d-80.10629262503517!3d-0.6943365992988959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902ba9d9f57fa6b9%3A0xc387ae9c6cf53713!2sUnidad%20Educativa%20Particular%20ITSI%20Chone!5e0!3m2!1ses-419!2sec!4v1761618670928!5m2!1ses-419!2sec"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
    );
}