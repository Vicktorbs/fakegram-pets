import React, { useState, useEffect, Fragment } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';
// import db from '../../../api/db.json'

function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function(){
        setLoading(true)
        window.fetch('https://petgram-server-alejandroverita-alejandroverita.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoading(false)
            })
    }, [])

    return {categories, loading}
}

export const ListOfCategoriesComponent = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false);

    useEffect(()=>{
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])


    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading
                    ? <Item key="loading"><Category /></Item>
                    : categories.map(category => <Item key={category.id}>
                        <Category {...category} path={`/pet/${category.id}`} />
                    </Item>)
            }
        </List>
    )

    return (
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)