package com.acquire.shopick.dao;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteStatement;

import de.greenrobot.dao.AbstractDao;
import de.greenrobot.dao.Property;
import de.greenrobot.dao.internal.DaoConfig;

import com.acquire.shopick.dao.PostCollection;

// THIS CODE IS GENERATED BY greenDAO, DO NOT EDIT.
/** 
 * DAO for table "POST_COLLECTION".
*/
public class PostCollectionDao extends AbstractDao<PostCollection, Long> {

    public static final String TABLENAME = "POST_COLLECTION";

    /**
     * Properties of entity PostCollection.<br/>
     * Can be used for QueryBuilder and for referencing column names.
    */
    public static class Properties {
        public final static Property Id = new Property(0, Long.class, "id", true, "ID");
        public final static Property Post_collection_id = new Property(1, Long.class, "post_collection_id", false, "POST_COLLECTION_ID");
        public final static Property Title = new Property(2, String.class, "title", false, "TITLE");
        public final static Property Description = new Property(3, String.class, "description", false, "DESCRIPTION");
        public final static Property GlobalID = new Property(4, String.class, "globalID", false, "GLOBAL_ID");
        public final static Property Post_banner = new Property(5, String.class, "post_banner", false, "POST_BANNER");
        public final static Property Featured = new Property(6, Boolean.class, "featured", false, "FEATURED");
        public final static Property Brand_name = new Property(7, String.class, "brand_name", false, "BRAND_NAME");
        public final static Property Brand_logo = new Property(8, String.class, "brand_logo", false, "BRAND_LOGO");
        public final static Property Brand_id = new Property(9, String.class, "brand_id", false, "BRAND_ID");
        public final static Property Liked = new Property(10, Boolean.class, "liked", false, "LIKED");
    };

    private DaoSession daoSession;


    public PostCollectionDao(DaoConfig config) {
        super(config);
    }
    
    public PostCollectionDao(DaoConfig config, DaoSession daoSession) {
        super(config, daoSession);
        this.daoSession = daoSession;
    }

    /** Creates the underlying database table. */
    public static void createTable(SQLiteDatabase db, boolean ifNotExists) {
        String constraint = ifNotExists? "IF NOT EXISTS ": "";
        db.execSQL("CREATE TABLE " + constraint + "\"POST_COLLECTION\" (" + //
                "\"ID\" INTEGER PRIMARY KEY ," + // 0: id
                "\"POST_COLLECTION_ID\" INTEGER," + // 1: post_collection_id
                "\"TITLE\" TEXT," + // 2: title
                "\"DESCRIPTION\" TEXT," + // 3: description
                "\"GLOBAL_ID\" TEXT," + // 4: globalID
                "\"POST_BANNER\" TEXT," + // 5: post_banner
                "\"FEATURED\" INTEGER," + // 6: featured
                "\"BRAND_NAME\" TEXT," + // 7: brand_name
                "\"BRAND_LOGO\" TEXT," + // 8: brand_logo
                "\"BRAND_ID\" TEXT," + // 9: brand_id
                "\"LIKED\" INTEGER);"); // 10: liked
    }

    /** Drops the underlying database table. */
    public static void dropTable(SQLiteDatabase db, boolean ifExists) {
        String sql = "DROP TABLE " + (ifExists ? "IF EXISTS " : "") + "\"POST_COLLECTION\"";
        db.execSQL(sql);
    }

    /** @inheritdoc */
    @Override
    protected void bindValues(SQLiteStatement stmt, PostCollection entity) {
        stmt.clearBindings();
 
        Long id = entity.getId();
        if (id != null) {
            stmt.bindLong(1, id);
        }
 
        Long post_collection_id = entity.getPost_collection_id();
        if (post_collection_id != null) {
            stmt.bindLong(2, post_collection_id);
        }
 
        String title = entity.getTitle();
        if (title != null) {
            stmt.bindString(3, title);
        }
 
        String description = entity.getDescription();
        if (description != null) {
            stmt.bindString(4, description);
        }
 
        String globalID = entity.getGlobalID();
        if (globalID != null) {
            stmt.bindString(5, globalID);
        }
 
        String post_banner = entity.getPost_banner();
        if (post_banner != null) {
            stmt.bindString(6, post_banner);
        }
 
        Boolean featured = entity.getFeatured();
        if (featured != null) {
            stmt.bindLong(7, featured ? 1L: 0L);
        }
 
        String brand_name = entity.getBrand_name();
        if (brand_name != null) {
            stmt.bindString(8, brand_name);
        }
 
        String brand_logo = entity.getBrand_logo();
        if (brand_logo != null) {
            stmt.bindString(9, brand_logo);
        }
 
        String brand_id = entity.getBrand_id();
        if (brand_id != null) {
            stmt.bindString(10, brand_id);
        }
 
        Boolean liked = entity.getLiked();
        if (liked != null) {
            stmt.bindLong(11, liked ? 1L: 0L);
        }
    }

    @Override
    protected void attachEntity(PostCollection entity) {
        super.attachEntity(entity);
        entity.__setDaoSession(daoSession);
    }

    /** @inheritdoc */
    @Override
    public Long readKey(Cursor cursor, int offset) {
        return cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0);
    }    

    /** @inheritdoc */
    @Override
    public PostCollection readEntity(Cursor cursor, int offset) {
        PostCollection entity = new PostCollection( //
            cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0), // id
            cursor.isNull(offset + 1) ? null : cursor.getLong(offset + 1), // post_collection_id
            cursor.isNull(offset + 2) ? null : cursor.getString(offset + 2), // title
            cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3), // description
            cursor.isNull(offset + 4) ? null : cursor.getString(offset + 4), // globalID
            cursor.isNull(offset + 5) ? null : cursor.getString(offset + 5), // post_banner
            cursor.isNull(offset + 6) ? null : cursor.getShort(offset + 6) != 0, // featured
            cursor.isNull(offset + 7) ? null : cursor.getString(offset + 7), // brand_name
            cursor.isNull(offset + 8) ? null : cursor.getString(offset + 8), // brand_logo
            cursor.isNull(offset + 9) ? null : cursor.getString(offset + 9), // brand_id
            cursor.isNull(offset + 10) ? null : cursor.getShort(offset + 10) != 0 // liked
        );
        return entity;
    }
     
    /** @inheritdoc */
    @Override
    public void readEntity(Cursor cursor, PostCollection entity, int offset) {
        entity.setId(cursor.isNull(offset + 0) ? null : cursor.getLong(offset + 0));
        entity.setPost_collection_id(cursor.isNull(offset + 1) ? null : cursor.getLong(offset + 1));
        entity.setTitle(cursor.isNull(offset + 2) ? null : cursor.getString(offset + 2));
        entity.setDescription(cursor.isNull(offset + 3) ? null : cursor.getString(offset + 3));
        entity.setGlobalID(cursor.isNull(offset + 4) ? null : cursor.getString(offset + 4));
        entity.setPost_banner(cursor.isNull(offset + 5) ? null : cursor.getString(offset + 5));
        entity.setFeatured(cursor.isNull(offset + 6) ? null : cursor.getShort(offset + 6) != 0);
        entity.setBrand_name(cursor.isNull(offset + 7) ? null : cursor.getString(offset + 7));
        entity.setBrand_logo(cursor.isNull(offset + 8) ? null : cursor.getString(offset + 8));
        entity.setBrand_id(cursor.isNull(offset + 9) ? null : cursor.getString(offset + 9));
        entity.setLiked(cursor.isNull(offset + 10) ? null : cursor.getShort(offset + 10) != 0);
     }
    
    /** @inheritdoc */
    @Override
    protected Long updateKeyAfterInsert(PostCollection entity, long rowId) {
        entity.setId(rowId);
        return rowId;
    }
    
    /** @inheritdoc */
    @Override
    public Long getKey(PostCollection entity) {
        if(entity != null) {
            return entity.getId();
        } else {
            return null;
        }
    }

    /** @inheritdoc */
    @Override    
    protected boolean isEntityUpdateable() {
        return true;
    }
    
}
