import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createListing, deleteListing, getAllListings, getListings, updateListing } from '../controllers/listingController.js'

const router = express.Router()



router.post('/create',verifyToken,createListing)
router.delete('/delete/:id',verifyToken,deleteListing)
router.post('/update/:id',verifyToken,updateListing)
router.get('/get/:id',getListings)
router.get('/get',getAllListings)


export default router
