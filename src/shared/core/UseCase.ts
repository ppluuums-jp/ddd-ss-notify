export interface UseCase<IRequest, IReponse> {
  execute(req?: IRequest): Promise<IReponse> | IReponse;
}
