import React from "react";
import { motion } from "framer-motion";
import useLockBodyScroll from "@/hooks/use-lock-body-scroll";
import s from "./Modal.module.css";

const Modal = ({ children }: { children: React.ReactNode }) => {
  useLockBodyScroll();
  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
