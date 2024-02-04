import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            ARTICLE DETAILS
        </div>
    );
};

export default memo(ArticlesDetailsPage);
