const { Router } = require('express')
const { getPokemonByName, getPokemonByType, getAllPokemon } = require('../../external-services/poke-api');
const { tokenVerification } = require('../../middleware/tokenVerification');
const router = Router()

/**
 * @openapi
 * /api/pokemon/all:
 *   get:
 *     tags:
 *       - ListPokemon
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: string
 *         description: Listar todos los pokemones con limite opcional.
 *       - in: header
 *         name: api-key
 *         type: string
 *         required: true
 *         description: API Key requerido.
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 height:
 *                   type: number
 *                 weight:
 *                   type: number
 *                 type:
 *                   type: array
 *                   items:
 *                     type: string
 *                 abilities:
 *                   type: array
 *                   items: 
 *                     type: string
 *                 stats:
 *                    type: object
 *                    properties: 
 *                      hp: 
 *                        type: integer
 *                      attack: 
 *                        type: integer
 *                      defense: 
 *                        type: integer
 *                      special-attack: 
 *                        type: integer
 *                      special-defense: 
 *                        type: integer
 *                      speed: 
 *                        type: integer
 *                                        
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 403
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 403
 *                     message:
 *                      type: string
 *                      example: Forbidden
 * 
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 401
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 401
 *                     message:
 *                      type: string
 *                      example: Unauthorized
 * 
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 500
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 500
 *                     message:
 *                      type: string
 *                      example: Ha ocurrido un error
 * securityDefinitions:
 *   api_key:
 *     type: apiKey
 *     name: api-key
 *     in: header
 */

/**
 * @openapi
 * /api/pokemon/name?pokemonName={pokemonName}:
 *   get:
 *     tags:
 *       - ListPokemon
 *     parameters:
 *       - in: query
 *         name: pokemonName
 *         schema:
 *           type: string
 *         description: Nombre del pokemon que se quiere filtrar.
 *       - in: header
 *         name: api-key
 *         type: string
 *         required: true
 *         description: API Key requerido.
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 height:
 *                   type: number
 *                 weight:
 *                   type: number
 *                 type:
 *                   type: array
 *                   items:
 *                     type: string
 *                 abilities:
 *                   type: array
 *                   items: 
 *                     type: string
 *                 stats:
 *                    type: object
 *                    properties: 
 *                      hp: 
 *                        type: integer
 *                      attack: 
 *                        type: integer
 *                      defense: 
 *                        type: integer
 *                      special-attack: 
 *                        type: integer
 *                      special-defense: 
 *                        type: integer
 *                      speed: 
 *                        type: integer
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 404
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 404
 *                     message:
 *                      type: string
 *                      example: Request failed with status code 404
 *                                        
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 403
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 403
 *                     message:
 *                      type: string
 *                      example: Forbidden
 * 
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 401
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 401
 *                     message:
 *                      type: string
 *                      example: Unauthorized
 * 
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 500
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 500
 *                     message:
 *                      type: string
 *                      example: Ha ocurrido un error
 * securityDefinitions:
 *   api_key:
 *     type: apiKey
 *     name: api-key
 *     in: header
 */

/**
 * @openapi
 * /api/pokemon/type?pokemonType={pokemonType}:
 *   get:
 *     tags:
 *       - ListPokemon
 *     parameters:
 *       - in: query
 *         name: pokemonType
 *         schema:
 *           type: string
 *         description: Nombre del tipo de pokemon que se quiere filtrar.
 *       - in: header
 *         name: api-key
 *         type: string
 *         required: true
 *         description: API Key requerido.
 *     security:
 *       - api_key: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 height:
 *                   type: number
 *                 weight:
 *                   type: number
 *                 type:
 *                   type: array
 *                   items:
 *                     type: string
 *                 abilities:
 *                   type: array
 *                   items: 
 *                     type: string
 *                 stats:
 *                    type: object
 *                    properties: 
 *                      hp: 
 *                        type: integer
 *                      attack: 
 *                        type: integer
 *                      defense: 
 *                        type: integer
 *                      special-attack: 
 *                        type: integer
 *                      special-defense: 
 *                        type: integer
 *                      speed: 
 *                        type: integer
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 404
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 404
 *                     message:
 *                      type: string
 *                      example: Request failed with status code 404
 *                                        
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 403
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 403
 *                     message:
 *                      type: string
 *                      example: Forbidden
 * 
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 401
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 401
 *                     message:
 *                      type: string
 *                      example: Unauthorized
 * 
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: integer
 *                       example: 500
 *                 data:
 *                   type: object
 *                   properties:
 *                     error: 
 *                      type: boolean
 *                      example: true
 *                     status:
 *                      type: integer
 *                      example: 500
 *                     message:
 *                      type: string
 *                      example: Ha ocurrido un error
 * securityDefinitions:
 *   api_key:
 *     type: apiKey
 *     name: api-key
 *     in: header
 */
router.get('/pokemon/name', tokenVerification, async (req, res) => {
  const { pokemonName } = req.query
  try {
    pokemonName = pokemonName.toLowerCase();
    const data = await getPokemonByName(pokemonName)
    return res.status(200).send([data])
  } catch (error) {
    return res.status(error.status).send({ error })
  }
})

router.get('/pokemon/type', tokenVerification, async (req, res) => {
  const { pokemonType } = req.query
  try {
    pokemonType = pokemonType.toLowerCase();
    const data = await getPokemonByType(pokemonType)
    return res.status(200).send(data)
  } catch (error) {
    return res.status(error.status).send({ error })
  }
})

router.get('/pokemon/all', tokenVerification, async (req, res) => {
    const { offset, limit } = req.query;
  try {
    const data = await getAllPokemon(offset, limit)
    return res.status(200).send(data)
  } catch (error) {
    return res.status(error.status).send({ error })
  }
})

module.exports = router
