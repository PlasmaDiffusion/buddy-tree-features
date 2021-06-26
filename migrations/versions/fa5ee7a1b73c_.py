"""empty message

Revision ID: fa5ee7a1b73c
Revises: eb65568881f1
Create Date: 2021-06-25 19:11:42.125816

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fa5ee7a1b73c'
down_revision = 'eb65568881f1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('feature_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('votes', sa.Integer(), nullable=True),
    sa.Column('usersVoted', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('feature_table')
    # ### end Alembic commands ###