import { RelationValidationPipe } from 'src/common/pipes/relation-validation.pipe';

export const allowedVoterRelations = []; // e.g. ['customerSubscriptions.service', 'landscaper.user', 'referrer.user', 'referredCustomers.user']

export class VoterRelationValidationPipe extends RelationValidationPipe {
  allowedRelations = allowedVoterRelations;
}
