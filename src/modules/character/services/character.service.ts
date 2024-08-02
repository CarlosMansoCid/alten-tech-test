import ApiClientService from "../../../lib/services/api-client-service";
import { ICharacter } from "../interfaces/ICharacter";
import { IResponse } from "../interfaces/IResponse";

class CharacterServiceClass extends ApiClientService<IResponse<ICharacter>> {}

const CharacterService = new CharacterServiceClass("characters");
export default CharacterService;
